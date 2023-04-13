import { GetStaticProps } from "next";
import { generateSSGHelper } from "../server/api/helpers/ssgHelper";

const YearlyResultPage = () => {
  return (
    <div>

    </div>
  )
}

export default YearlyResultPage

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const ssg = await generateSSGHelper();

  const fetchedTodayResults = await ssg.formatedResults.getFullDayResults.fetch({ queryDate: new Date() });

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60
  };
};
