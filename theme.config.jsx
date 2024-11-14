import Footer from '/components/footer'

export default {
    logo: <span>Pathfinder SAGE</span>,
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
        content: "Questions? Send feedback", // content of the feedback button
        useLink: () => "mailto:sebastian.moder@uni.li" // Custom link
    },
    footer: {
        content: (
                <Footer />
        )
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
        </>
    )
    // ... other theme options
}