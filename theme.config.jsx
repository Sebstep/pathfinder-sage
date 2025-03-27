import Footer from '/components/footer'

function HeaderLogo() {
    return (
        <div className="text-lg font-extrabold">
            <span className="text-eu-blue">Pathfinder SAGE</span>
        </div>
    );
}

export default {
    logo: <HeaderLogo />,
    project: {
        link: 'https://github.com/Sebstep/pathfinder-sage'
    },
    docsRepositoryBase: 'https://github.com/Sebstep/pathfinder-sage/tree/main',
    editLink: {
        component: null,
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        autoCollapse: false,
        toggleButton: false,
    },
    feedback: {
        content: null // "Questions? Send feedback", // content of the feedback button
        // useLink: () => "mailto:sebastian.moder@uni.li" // Custom link
    },
    footer: {
        content: (
                <Footer />
        )
    },
    banner: {
        dismissible: false,
        key: "indevelopment",
        content: "🚧 This site is under development; its content is not final and may change at any time. 🚧",
    },
    head: (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-6DRGEDEGZ2"></script>
            <script 
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-6DRGEDEGZ2');
                    `,
                }}
            />
            <script src="https://kit.fontawesome.com/6a5bc08ebc.js" crossorigin="anonymous"></script>
            <link rel="icon" href="/icon.ico" type="image/x-icon" />
        </>
    )
    // ... other theme options
}