import Header from '@/components/common/Header';
import TradingViewWidget from '@/components/common/TradingViewWidget';
import { HEATMAP_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from '@/lib/consts';

function Home(props: {}) {
    const {} = props

    return (
       <div className="min-h-screen flex home-wrapper">
        <div className="w-full grid gap-8 home-section">
            <TradingViewWidget 
                config={MARKET_OVERVIEW_WIDGET_CONFIG} 
                scriptUrl='https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js' 
                title={"Market Overview"} 
                className='custom-chart '/>
            <TradingViewWidget 
                config={HEATMAP_WIDGET_CONFIG} 
                scriptUrl='https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js' 
                title={"Heat Map"} 
                className='custom-chart '/>
            <TradingViewWidget 
                config={TOP_STORIES_WIDGET_CONFIG} 
                scriptUrl='https://s3.tradingview.com/external-embedding/embed-widget-timeline.js' 
                className='custom-chart '/>
        </div>
       </div>
    )
}

export default Home
