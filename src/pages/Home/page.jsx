import { useNavigate } from "react-router";
import TopSection from "../../components/TopSection/TopSection";
import SummaryCard from "../../features/SummaryCard/SummaryCard";
import { generateSummaries } from "/src/utils/home.js";
import summariesData from "../../data/homeData";
import DashboardChart from "../../features/DashboardChart/DashboardChart";
import LastProducts from "../../features/LastProducts/LastProducts";
import LastUsers from "../../features/LastUsers/LastUsers";

function Home() {
  const navigate = useNavigate();
  const Summary = () => {
    const summarys = generateSummaries({ ...summariesData });

    return (
      <div className="summary-section grid grid-cols-4 gap-x-6">
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

      <section className="h-115 flex items-center justify-between gap-x-4">
        <LastUsers />

        <div className="h-full flex-1 p-4 pt-8 bg-card rounded-2xl">
          <DashboardChart />
        </div>
      </section>

      <LastProducts />
    </>
  );
}

export default Home;
