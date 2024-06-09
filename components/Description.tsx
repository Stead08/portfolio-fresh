const Description = () => {
  return (
    <>
      <h3 className="text-3xl font-bold uppercase text-gray-600 lg:text-center">
        Description
      </h3>
      <div className="flex justify-center flex-col bg-gray-50 shadow-lg rounded-lg p-2 h-fullf">
        <h4 className="text-xl mx-auto w-full md:w-auto font-semibold">こんにちは</h4>
        <p className="block mx-auto w-full md:w-auto text-gray-700 mt-2 mb-2 ">
          Stead08といいます。 24卒でフロントエンドエンジニアとして働いてます。<br/>
          経済学部在学中にWeb系の勉強を始めました。<br/>
          フロントエンドもサーバーサイドの方に興味があります。<br/>
          今は好き嫌いなくどちらもできるように現在勉強しています。<br/>
          将来はインフラ系の知識を持ち合わせたフロントエンドorバックエンドエンジニアになりたいです。
        </p>
      </div>
    </>
  );
};

export default Description;
