import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transaction-pie-chart";
import { getDashboard } from "../_data/get-dashboard/intex";
import ExpensesPerCategory from "./_components/expenses-per-category";

interface HomeProps {
  searchParams: { month: string };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    return redirect("?month=01");
  }

  const dashboard = await getDashboard(month);

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <SummaryCards month={month} {...dashboard} />
        <div className="grid grid-cols-3 grid-rows-1 gap-6">
          <TransactionsPieChart {...dashboard} />
          <ExpensesPerCategory
            expensesPerCategory={dashboard.totalExpensePerCategory}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
