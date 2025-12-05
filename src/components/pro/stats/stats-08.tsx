import { TrendingUp, CreditCard, ArrowRight, Globe, Home } from "lucide-react";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";


export default function StatsEight() {
  return (
    <section className="min-h-screen bg-white py-20 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card
            className="cols-span-1 w-full p-6 lg:p-8 flex flex-col justify-between h-[280px]"
          >
            <Text className="text-lg font-medium mb-4">
              Regional Growth
            </Text>
            <Text className="text-4xl md:text-5xl font-bold mb-6">
              74.6%
            </Text>
            <div className="border-t-2 pt-4 mt-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Home className="w-6 h-6" strokeWidth={2} />
                  <Text className="font-bold">United States</Text>
                </div>
                <ArrowRight className="w-6 h-6" strokeWidth={2} />
              </div>
            </div>
          </Card>

          <Card
            className="col-span-1 w-full p-6 lg:p-8 flex flex-col justify-between h-[280px]"
          >
            <Text className="text-lg font-medium mb-4">
              Global Growth
            </Text>
            <Text className="text-4xl md:text-5xl font-bold mb-6">
              35.2%
            </Text>
            <div className="border-t-2 pt-4 mt-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6" strokeWidth={2} />
                  <Text className="font-bold">Global</Text>
                </div>
                <ArrowRight className="w-6 h-6" strokeWidth={2} />
              </div>
            </div>
          </Card>
          <Card className="col-span-1 lg:col-span-2 bg-primary w-full p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
            <div className="flex w-full justify-between items-start mb-6">
              <div className="flex flex-col items-start justify-start">
                <Text className="text-lg font-medium mb-4">
                  Total Number Of Active User
                </Text>
                <Text className="text-4xl md:text-5xl font-bold">
                  12.8M
                </Text>
              </div>
              <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                <TrendingUp
                  className="w-6 h-6 text-primary"
                  strokeWidth={2.5}
                />
              </div>
            </div>

            <div className="bg-white border-2 p-4 mt-auto">
              <div className="flex items-center justify-start gap-3">
                <div className="w-10 h-10 bg-primary border-2 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-black" strokeWidth={2} />
                </div>
                <div>
                  <Text className="font-semibold text-sm">
                    100% Payment Credit
                  </Text>
                  <Text className="text-muted-foreground text-sm">
                    We offer 100% payment credit to our clients.
                  </Text>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
