import RootLandingPage from "@/components/RootLandingPage/RootLandingPage";
import ContentOne from "@/components/Layout/home/contentHomeOne";
import ContentTwo from "@/components/Layout/home/contentHomeTwo";

import ContentThree from "@/components/Layout/home/contentHomeThree";
import ContentHomeVideo from "@/components/Layout/home/contentHomeVideo";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <RootLandingPage>
      <ContentHomeVideo />
      <ContentOne />
      <ContentTwo />
      <ContentThree />
    </RootLandingPage>
  );
}
