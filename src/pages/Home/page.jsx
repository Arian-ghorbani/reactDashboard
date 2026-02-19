import { useNavigate } from "react-router";
import TopSection from "../../components/TopSection/TopSection";
import SummaryCard from "./components/SummaryCard/SummaryCard";
import { generateSummaries } from "/src/utils/home.js";
import summariesData from "../../data/homeData";
import DashboardChart from "../../features/DashboardChart/DashboardChart";

function Home() {
  const navigate = useNavigate();
  const Summary = () => {
    const summarys = generateSummaries({ ...summariesData });

    return (
      <div className="summary-section flex items-center justify-between gap-x-6">
        {summarys.map((summary) => {
          return <SummaryCard key={summary.id} {...summary} />;
        })}
      </div>
    );
  };

  const CreateProductBtn = () => {
    const clickHandler = () => {
      navigate("products");
    };
    return (
      <button
        className="px-4 py-1.5 bg-primary text-white rounded-xl cursor-pointer transition-colors duration-300 hover:bg-secondary"
        onClick={clickHandler}
      >
        ایجاد محصول
      </button>
    );
  };

  return (
    <>
      <TopSection
        title={"داشبورد"}
        buttons={<CreateProductBtn />}
        Summary={<Summary />}
      />

      <section>
        <div className="w-1/2 p-4 pt-8 bg-card rounded-2xl">
          <DashboardChart />
        </div>

        {/* New users */}
      </section>
    </>
  );
}

export default Home;
