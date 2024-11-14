export default {
    logo: <span>Pathfinder SAGE</span>,
    project: {
        link: 'https://github.com/Sebstep/pathfinder-sage'
    },
    docsRepositoryBase: 'https://github.com/Sebstep/pathfinder-sage/tree/main',
    editLink: {
        component: null,
    },
    feedback: {
        content: "Questions? Send feedback", // content of the feedback button
        useLink: () => "mailto:sebastian.moder@uni.li" // Custom link
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        autoCollapse: false,
        toggleButton: false,
    },
    footer: {
        content: (
                <span>
                    <strong>Pathfinder SAGE</strong>
                </span>
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
        </>
    )
    // ... other theme options
}