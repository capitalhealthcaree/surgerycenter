import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Expert Care in Anesthesiology, General, Orthopedic, ENT Surgery & Pain Management"}
                </title>
            </Head>
        </>
    )
}

export default PageHead