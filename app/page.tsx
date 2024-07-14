import TopDealBox from "./Components/TopDealBox/TopDeal";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "./data";
import ChartBox1 from "./Components/CharBox1/ChartBox1";
import LeadSources from "./Components/LeadSources/LeadSources";
import Revenue from "./Components/Revenue/Revenue";
import BarChartBox from "./Components/BarChartBox/BarChartBox";
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row home">
        <div className="col-md-3">
          <div className="box box1">
            <TopDealBox />
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="box box2">
                <ChartBox1 {...chartBoxUser} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="box box3">
                <ChartBox1 {...chartBoxProduct} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="box box5">
                <ChartBox1 {...chartBoxConversion} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="box box6">
                <ChartBox1 {...chartBoxRevenue} />
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="box box6">
                <Revenue />
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-md-3">
          <div className="box box4">
            <LeadSources />
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <div className="box box8">
            <BarChartBox {...barChartBoxVisit} />
          </div>
        </div>
        <div className="col-md-6  revenue">
          <div className="box box7">
            <Revenue />
          </div>
        </div>
        <div className="col-md-3">
          <div className="box box9">
            <BarChartBox {...barChartBoxRevenue} />
          </div>
        </div>
      </div>
    </div>
  );
}
