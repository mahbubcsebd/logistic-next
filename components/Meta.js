import Head from "next/head";

const Meta ({title, keywords, description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
    );
}

Meta.defaultProps = {
    title: "Logistics",
    keywords: "truck hire, car hire, car service",
    description: "This is truck hiring app"
}

export default Meta;