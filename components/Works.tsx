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
      url: "https://stead08.github.io",
    },
    {
      title: "自作PC構成",
      description: "Next.js 13とChakra UIで構築した自作PC構成SPA",
      url: "https://pccomp.vercel.app/",
    },
    {
      title: "Stead Profile",
      description: "FreshとMicroCMSで構築した自分の記事まとめサイト",
      url: "https://fresh-microcms.deno.dev/",
    },
    {
      title: "距離・運賃計算システム",
      description: "ゼミの研究のために作ったものです。",
      url:
        "https://stead08-omisegohanproject-streamlit-app-04qdaj.streamlit.app/",
    },
    {
      title: "シラバス検索システム",
      description:
        "ローカルでの使用を想定しているので外部からはアクセスできません。",
      url: "https://github.com/Stead08/syllabus_search_system",
    },
    {
      title: "ブログサイト",
      description: "Next.jsとsupabaseで構築したブログサイト（モック）です。",
      url:
        "https://nextjs-supabase-blog-practice-kwpusq5nf-stead08.vercel.app/",
    },
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
