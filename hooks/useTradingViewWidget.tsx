import React, { useEffect, useRef} from 'react'

function useTradingViewWidget(scriptUrl: string, config: Record<string, unknown>, height = 600) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(
        () => {
                console.log(containerRef)
            if(!containerRef.current ) return;
            if(containerRef.current.dataset.loaded) return;
            // containerRef.current.innerHTML = `
            //     <div className="tradingview-widget-container__widget" style="height: calc(${height}px - 32px); width: 100%"></div>
            // `
            const script = document.createElement("script");
            script.src = scriptUrl
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = JSON.stringify(config)
            console.log(script)
            containerRef.current.appendChild(script);
            containerRef.current.dataset.loaded = 'true'
            return ()=>{
                if(containerRef.current){
                    containerRef.current.innerHTML = "";
                    delete containerRef.current.dataset.loaded
                }
            }
            },
    [scriptUrl, config, height]
  );

    return containerRef;
}

export default useTradingViewWidget
