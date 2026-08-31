'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, Sun, RotateCcw, Image as ImageIcon, MoveVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { mountScrollWorld, type WorldController, type WorldState } from '@/lib/scroll-world';
import { sections, connectors } from '@/lib/journey';
export default function Home() {
  const host = useRef<HTMLDivElement>(null);
  const world = useRef<WorldController | null>(null);
  const [state,setState]=useState<WorldState>({index:0,progress:0,mode:'loading',transit:false});
  const [stillMode,setStillMode]=useState<boolean | undefined>();
  const [cleanView,setCleanView]=useState(false);
  useEffect(()=>{
    if(!host.current)return;
    const controller=mountScrollWorld(host.current,{sections,connectors,nav:false,atmosphere:false,diveScroll:1.6,connScroll:.85,crossfade:.05,reducedMotion:stillMode,hint:'向下捲動，走進朝陽',onUpdate:next=>setState(prev=>prev.index===next.index&&prev.progress===next.progress&&prev.mode===next.mode&&prev.transit===next.transit?prev:next)});
    world.current=controller;
    return ()=>{controller.destroy();world.current=null;};
  },[stillMode]);
  const go=(index:number)=>world.current?.jumpTo(index);
  return <main id="top" className={`campus-world${cleanView?' clean-view':''}`}>
    <div ref={host} className="world-host" aria-label="滾動控制的朝陽科技大學校園導覽"/>
    <header className="campus-header"><a href="#top" className="wordmark" onClick={e=>{e.preventDefault();go(0);}}><Sun /><span>步步朝陽<small>A WALK THROUGH CHAOYANG</small></span></a><span className="edition">朝陽科技大學 · 校園漫遊</span><div className="header-actions"><Button variant="ghost" className="quiet-button" aria-pressed={cleanView} onClick={()=>setCleanView(v=>!v)}>{cleanView?'顯示導覽':'專注看風景'}</Button><Button variant="outline" className="quiet-button mode-button" aria-pressed={state.mode==='static'} onClick={()=>setStillMode(state.mode!=='static')}><ImageIcon size={14}/>{state.mode==='static'?'開啟鏡頭':'靜態模式'}</Button></div></header>
    <div className="location-stamp"><span>CHAOYANG</span><span>學習 · 綠意 · 光影</span><i/></div>
    <div className="journey-status" aria-live="polite">{state.mode==='static'?'靜態漫遊':state.mode==='fallback'?'此站暫以靜態景觀呈現':state.mode==='loading'?'正在準備此站鏡頭…':state.transit?'前往下一站':'滾動控制鏡頭 · 可向上回遊'}</div>
    {state.progress<2&&<Button className="start-journey" onClick={()=>world.current?.seekProgress(2.8)}>開始漫遊 <ArrowDown size={16}/></Button>}
    {state.progress>94&&<div className="journey-ending"><Button onClick={()=>go(0)}><RotateCcw size={15}/> 再走一遍</Button><a href="https://www.cyut.edu.tw/" target="_blank" rel="noreferrer">朝陽科技大學 <ArrowUpRight size={15}/></a></div>}
    <footer className="journey-dock"><div className="journey-meter"><span><MoveVertical size={12}/> SCROLL TO EXPLORE</span><Slider value={[state.progress]} min={0} max={100} step={.1} aria-label="校園漫遊進度" onValueChange={value=>{const p=Array.isArray(value)?value[0]:value;setState(prev=>({...prev,progress:p}));world.current?.seekProgress(p);}}/><output>{String(Math.round(state.progress)).padStart(2,'0')}%</output></div><nav className="journey-nav" aria-label="八個校園章節">{sections.map((s,i)=><Button key={s.id} variant="ghost" className={`station ${state.index===i?'active':''}`} aria-current={state.index===i?'step':undefined} onClick={()=>go(i)}><span className="station-number">{String(i+1).padStart(2,'0')}</span><span>{s.label}</span></Button>)}</nav><div className="mobile-nav"><Button variant="ghost" size="icon" aria-label="上一站" disabled={state.index===0} onClick={()=>go(state.index-1)}><ArrowLeft/></Button><span>{String(state.index+1).padStart(2,'0')} / 08　{sections[state.index].label}</span><Button variant="ghost" size="icon" aria-label="下一站" disabled={state.index===7} onClick={()=>go(state.index+1)}><ArrowRight/></Button></div><div className="journey-fineprint"><span>八個停留，無數種相遇。</span><span>AI 微縮校園意象 · 非實景導航地圖</span></div></footer>
    <noscript><section className="noscript-tour"><h1>步步朝陽｜校園漫遊</h1><p>開啟 JavaScript 即可體驗滾動鏡頭。以下為八站靜態導覽。</p>{sections.map(s=><article key={s.id}><img src={s.still} alt={s.label}/><h2>{s.label}</h2><p>{s.body}</p></article>)}</section></noscript>
  </main>;
}
