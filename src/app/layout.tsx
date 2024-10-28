import SideMenu from "@/components/SideMenu";
import "./globals.css";
import BodyLeftHeader from "@/components/BodyLeftHeader";
import BodyLeftContent from "@/components/BodyLeftContent";
import BodyRightHeader from "@/components/BodyRightHeader";
import BodyRightContent from "@/components/BodyRightContent";
import TopHeader from "@/components/TopHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-dvh border-2 ">
          <div className="w-16 h-full">
            <SideMenu />
          </div>
          <div className="flex-1 flex-col  ">
            <div className="h-16 ">
              <TopHeader />
            </div>
            <div className="flex-1 flex ">
              <div className="flex-1 flex-col">
                <div className="flex-[10%]">
                  <BodyLeftHeader />
                </div>
                <div className="flex-[100]">
                  <BodyLeftContent />
                </div>
              </div>
              <div className="flex-1 felx-col border-l-2 border-gray-400">
                <div className="flex-[100]">
                  <BodyRightHeader />
                </div>
                <div className="flex-1">
                  <BodyRightContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
