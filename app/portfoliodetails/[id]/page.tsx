import PortfolioDetailsDesign from "../../page/portfolio-details-design";
import { DataArray } from "@/app/data";

interface PortfolioParams {
  id: string;
}

interface PortfolioProps {
  params: PortfolioParams;
}

const Portfolio = ({ params }: PortfolioProps) => {
  const data = DataArray[parseInt(params.id)];
  return (
    <>
      <PortfolioDetailsDesign
        data={data}
        id={params.id}
        DataArray={DataArray}
      />
    </>
  );
};

export default Portfolio;
