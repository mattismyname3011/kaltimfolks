"use server";
import Card from "../components/ui/dashboard/card/card";
import Chart from "../components/ui/dashboard/chart/chart";
import styles from "../components/ui/dashboard/dashboard.module.css";
import Navbar from "../components/ui/dashboard/navbar/navbar";
import Users from "../components/ui/dashboard/userList/userList";
import prisma from "@/lib/prisma";

const Dashboard = async () => {
  const dashboardContent = await prisma.post.findMany({
    take: 4,
    orderBy: {
      views: "desc",
    },
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Navbar />
        <h1>Welcome to Kaltimfolks Dashboard</h1>
        {/* <div className={styles.cards}>
          {dashboardContent?.map((item) => (
            <Card item={item} key={item.role} />
          ))}
        </div> */}

        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
