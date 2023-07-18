const Description = () => {
  return (
    <article>
      <h3 className="text-3xl font-bold uppercase p-5 text-gray-600 dark:text-gray-400 lg:text-center">
        Description
      </h3>
      <div className="bg-gray-50 shadow-lg rounded-lg p-2">
        <div className="bg-gray rounded-lg p-2 text-center h-full">
          <h4 className="text-xl font-semibold mb-2">こんにちは</h4>
          <p className="text-gray-700">
            Stead08といいます。 24卒で新卒エンジニアとして働く予定です。
          </p>
          <p className="text-gray-700">
            フロントエンドよりもサーバーサイドの方に興味があります。
          </p>
          <p className="text-gray-700">
            好き嫌いなくどちらもできるように現在勉強しています。
          </p>
        </div>
      </div>
    </article>
  );
};

export default Description;
