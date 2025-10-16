import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { RocketIcon } from "lucide-react";

const FeaturesSectionSix = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-start gap-6 mb-4">
            <Badge variant="surface" className="flex-shrink-0 p-5 border-2">
              <RocketIcon className="w-12 h-12" />
            </Badge>
            <Text as="h2">
              LIGHTNING<br />
              FAST DEPLOYMENT
            </Text>
          </div>

          <Text className="text-lg text-muted-foreground max-w-xl">
            Deploy your applications in seconds, not hours. Our revolutionary
            platform transforms the way you ship code to production.
          </Text>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className="h-full flex flex-col space-y-6 justify-between">
            <Card
              className="bg-white p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Badge variant="outline" className="p-2 bg-white flex-shrink-0">

                  <img className="w-full h-full" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/alarm_bg_yellow.svg" />
                </Badge>
                <div>
                  <Card.Title>
                    Predictive Modeling
                  </Card.Title>
                  <Card.Description>
                    Forecast trends with 95% accuracy using machine learning algorithms
                  </Card.Description>
                </div>
              </div>
            </Card>
            <Card
              className="bg-white p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Badge variant="outline" className="p-2 bg-white flex-shrink-0">

                  <img className="w-full h-full" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/pie_chart_bg_yellow.svg" />
                </Badge>
                <div>
                  <Card.Title>
                    Real-Time Processing
                  </Card.Title>
                  <Card.Description>
                    Process company data in real-time with high accuracy so you can make informed decisions.
                  </Card.Description>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 h-full hover:shadow-lg transition-shadow">
            <Badge variant="outline" className="inline-flex p-4 mb-6  ">
              <img className="w-full h-full" src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/icons/zap_bg_yellow.svg" />
            </Badge>

            <div className="flex items-start gap-4 mb-6">
              <div>
                <Card.Title>
                  Instant Deploy
                </Card.Title>
                <Card.Description>
                  Deploy your applications in seconds, not hours. Our revolutionary
                  platform transforms the way you ship code to production.
                </Card.Description>
              </div>
            </div>

            <Button className="mt-auto">
              Learn More
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionSix;