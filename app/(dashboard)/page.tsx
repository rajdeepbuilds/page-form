import { GetFormStats, GetForms } from "@/actions/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ReactNode, Suspense } from "react";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/CreateFormBtn";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4-xl font-bold col-span-2">Your Forms</h2>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreateFormBtn />
      </div>
    </div>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}
function StatsCards(props: StatsCardProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<LuView className="text-black dark:text-white" />}
        helperText="All time form visits"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-gray-300"
      />
      <StatsCard
        title="Total submissions"
        icon={<FaWpforms className="text-black dark:text-white" />}
        helperText="All time form submissions"
        value={data?.submissions.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-gray-300"
      />
      <StatsCard
        title="Submission rate"
        icon={<HiCursorClick className="text-black dark:text-white" />}
        helperText="Visits that result in form submission"
        value={data?.submissionRate.toLocaleString() + "%" || ""}
        loading={loading}
        className="shadow-md shadow-gray-300"
      />
      <StatsCard
        title="Bounce Rate"
        icon={<TbArrowBounce className="text-black dark:text-white" />}
        helperText="Visits that leaves without interacting"
        value={data?.submissionRate.toLocaleString() + "%" || ""}
        loading={loading}
        className="shadow-md shadow-gray-300"
      />
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
  helperText,
  loading,
  className,
}: {
  title: string;
  value: string;
  helperText: string;
  className: string;
  loading: boolean;
  icon: ReactNode;
}) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2-xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
      </CardContent>
    </Card>
  );
}

function FormCardSkeleton(){
  return <Skeleton className="border-2 border-primary/20 h-[190px] w-full"/>;
}

async function FormCards(){
  const forms = await GetForms();
}