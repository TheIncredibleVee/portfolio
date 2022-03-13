export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string',
        },
        {
            name:'startDate',
            title:'Start Date',
            type:'string',
        },
        {
            name:'endDate',
            title:'End Date',
            type:'string',
        },
        {
            name:'desc',
            title:'Descriptions',
            type:'array',
            of: [
                {
                  name:'description',
                  title:'Description',
                  type:'string'
                }
              ]
        },
        {
            name:'techStack',
            title:'Tech Stack',
            type:'array',
            of: [
                {
                  name:'libraryOrFramework',
                  title:'Library or Framework',
                  type:'string'
                }
              ]
        },
    ]
}