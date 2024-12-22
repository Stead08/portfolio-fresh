import { Work } from "../lib/types.ts";
const Project = (props: Work) => (
  <article>
    <a href={props.url} rel="noopener" target="_blank">
      <div className="bg-gray-50 shadow-lg rounded-lg p-5">
        <div className="bg-gray-50 rounded-lg p-2 text-center h-full">
          <h4 className="text-xl font-semibold mb-2">{props.title}</h4>
          <p className="text-gray-700">{props.description}</p>
        </div>
      </div>
    </a>
  </article>
);

const Works = () => {
  const works: Work[] = [
    {
      title: "Stead08のポートフォリオ",
      description: "このサイトです。",
      url: "portfolio.stead08.dev",
    },
    {
      title: "自作PC構成",
      description: "Next.js 13とChakra UIで構築した自作PC構成SPA",
      url: "https://pccomp.vercel.app/",
    },
    {
      title: "Webp Encoder",
      description: "PNG,JPEGをWebpに変換するWebアプリです。Wasmによってブラウザで変換しています。",
      url: "https://img-optimizer.stead08.dev/",
    },
    {
      title: "Edge CMS",
      description: "Edge CMSは、インフラをCloudflare Workersで構築したコンテンツ管理システムです。",
      url: "https://github.com/Stead08/edge-cms",
    }
  ];

  return (
    <>
      <h3
        id="works"
        className="text-3xl font-bold uppercase text-gray-600 lg:text-center"
      >
        Works
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {works.map((work) => <Project {...work} />)}
      </div>
    </>
  );
};

export default Works;
