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
        autoCollapse: true,
        toggleButton: false,
    },
    footer: {
        content: (
                <span>
                    <strong>Pathfinder SAGE</strong>
                </span>
        )
    },
    // ... other theme options
}