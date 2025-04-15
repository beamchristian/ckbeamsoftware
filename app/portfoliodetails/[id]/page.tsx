import PortfolioDetailsDesign from "../../page/portfolio-details-design";
import { DataArray } from "@/app/data";
import { notFound } from "next/navigation"; // Import for handling invalid IDs

// eslint-disable-next-line no-use-before-define
const Portfolio = ({ params }: { params: { id: string } }) => {
  const idNumber = parseInt(params.id, 10); // Specify radix 10

  // Check if parsing failed (NaN) or if ID is out of bounds
  if (isNaN(idNumber) || idNumber < 0 || idNumber >= DataArray.length) {
    console.warn(`Invalid portfolio ID received: ${params.id}. Returning 404.`);
    notFound(); // Trigger a 404 page
  }
  const data = DataArray[idNumber];

  if (!data) {
    console.warn(`No data found for portfolio ID: ${idNumber}. Returning 404.`);
    notFound();
  }

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
