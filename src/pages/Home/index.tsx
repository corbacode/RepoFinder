import TextAnimate from "@/components/TextAnimate";
import BaseView from "@/views/Base";

export default function Home() {
  return (
    <BaseView>
      <div>
        <div className="container">
          <TextAnimate
            title="REPO FINDER"
            subtitle="SEARCH GITHUB REPOSITORIES"
          />
        </div>
      </div>
    </BaseView>
  );
}
