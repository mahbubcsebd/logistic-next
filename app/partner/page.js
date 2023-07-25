import Head from "next/head";

const page = () => {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <h1>Partner Page</h1>
        </div>
    );
};

export default page;