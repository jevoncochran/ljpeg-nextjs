import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>LJPEG Photography</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Euphoria+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      {props.children}
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Amatic SC", cursive;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
