"use client"
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import React, { useRef, memo } from 'react';

interface TradingViewWidgetProps{
  title?: string;
  className?: string;
  height?: number;
  scriptUrl: string;
  config: Record<string, unknown>;

}

function TradingViewWidget({title, className, height=600, scriptUrl, config}: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height)
  return (
    <div className={className}>
      { title && <h1 className='text-xl font-bold'>{title}</h1>}
      <div className="tradingview-widget-container" ref={containerRef} style={{ height: height+'px', width: "100%" }} />
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener nofollow" target="_blank"><span className="blue-text">AAPL stock chart</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);
