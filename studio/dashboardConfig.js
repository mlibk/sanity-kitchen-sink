export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60eb37b36f32a863fd8c071c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6z4f3cja',
                  apiId: '1e9c7f7d-bdb5-4dc0-af9f-0713e149986a'
                },
                {
                  buildHookId: '60eb37b349236bf1dae141ce',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-emnpnot2',
                  apiId: 'b10932b8-0988-4757-ac2b-51075f91d858'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mlibk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-emnpnot2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
