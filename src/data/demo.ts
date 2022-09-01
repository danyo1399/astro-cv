import { Data } from "../models";

export const demo: Data = {
    id: 'demo',
    pageTitle: 'Bob Jones CV',
    profile: {
        name: { givenName: 'Bob', surname: 'Jones' },
        title: 'Senior Solutions Architect',
    },
    companies: [
        { filename: 'apple.png' },
        { filename: 'microsoft.webp' },
        { filename: 'bnz.png' },
        { filename: 'kiwibank.png' },
    ],
    expertise: [{
        area: 'Systems Analysis And Design', items: []
    }, {
        area: 'TOGAF Architecture',
        items: []
    },
    {
        area: 'Cloud Architecture',
        items: ['AWS', 'Azure', 'Google Cloud']
    }
    ],
    contact: [
        { name: 'Phone', text: '+64 22 22222' },
        { name: 'Email', text: 'bob.jones@examplemail.com' },
        { name: 'Address', text: 'Wellington, New Zealand' },
    ],
    introduction:
        `
orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget egestas odio, sit amet scelerisque justo. 
Mauris vitae fringilla nisl. Suspendisse sollicitudin sapien vel nulla tempus posuere. Integer vel justo maximus dui dignissim sodales. Sed bibendum sed nulla ut iaculis. 
In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
Duis suscipit lacus enim, id vestibulum erat tristique venenatis.

Aenean consequat magna eget nulla egestas fringilla. Maecenas eget risus laoreet, dignissim mauris at, facilisis purus. 
In purus ante, scelerisque eget ligula id, suscipit tempor massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
Curabitur faucibus convallis lacus, in volutpat magna sollicitudin nec. Suspendisse potenti. Etiam varius euismod justo, nec varius velit fermentum eu. 
Vivamus erat sem, finibus ac dui ac, iaculis vestibulum nibh. Maecenas facilisis velit justo, vel placerat libero rhoncus a. Phasellus blandit hendrerit porttitor. 
Quisque non egestas velit. Aenean euismod eros vitae blandit cursus. Phasellus aliquet fermentum mi sed rhoncus. Sed quam dolor, feugiat id massa ac, pharetra placerat urna. 
Mauris placerat molestie nulla sit amet pulvinar. Proin eu euismod elit.
        `
    ,
    references: [
        { name: 'Bill Gates', email: 'bill@microsoft.com', phone: '+11 2223333', role: 'Founder' },
        { name: 'Steve Jobs', email: 'steve@microsoft.com', phone: '+11 3333333', role: 'Founder' }
    ],
    education: [
        { year: '2000', qualification: 'Bachelor of Information Systems with Computer Science', institution: 'Harvard University' }
    ],
    experience: [
        {
            year: '2022', organisation: 'Microsoft', role: 'Enterprise Architect',
            description: `
orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget egestas odio, sit amet scelerisque justo. Mauris vitae fringilla nisl. 
Suspendisse sollicitudin sapien vel nulla tempus posuere. Integer vel justo maximus dui dignissim sodales. Sed bibendum sed nulla ut iaculis. 
In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
Duis suscipit lacus enim, id vestibulum erat tristique venenatis


Direct Contract
`, pageBreak: 'before'
        },
        {
            year: '2019 - 2022', organisation: 'Apple', role: 'Solutions architect',
            description: `
            
Sed eleifend eu nunc at hendrerit. Suspendisse ornare, mi nec aliquet rutrum, arcu neque efficitur felis, quis imperdiet libero nulla nec justo. 
Fusce erat sem, molestie vitae gravida eu, rhoncus non massa. Donec in feugiat sapien, vel convallis velit. Maecenas libero ipsum, mollis vel lacinia eget, convallis commodo sem. 
Nulla non lacinia ante. Donec eget dictum urna. Donec feugiat nisi mi, sit amet lacinia lectus mattis eu. 
Sed pulvinar cursus elit, et tristique velit. Quisque feugiat aliquam eros, at maximus elit lobortis iaculis. 
Suspendisse odio mauris, faucibus a volutpat vitae, finibus eget ante. 
In arcu metus, pharetra a interdum eget, molestie in ipsum. Cras nec sapien id nisl scelerisque congue non sed odio.

Contract Through Randstad

### Tech Stack 
Azure Devops, AWS, Event Sourcing
            `,
            pageBreak: 'none'
        },
        {
            year: '2016 - 2019', organisation: 'Bank of New Zealand', role: 'Cloud Solutions Architect',

            description:
                `
Sed eleifend eu nunc at hendrerit. Suspendisse ornare, mi nec aliquet rutrum, arcu neque efficitur felis, quis imperdiet libero nulla nec justo. 
Fusce erat sem, molestie vitae gravida eu, rhoncus non massa. Donec in feugiat sapien, vel convallis velit. 
Maecenas libero ipsum, mollis vel lacinia eget, convallis commodo sem. Nulla non lacinia ante. Donec eget dictum urna. 
Donec feugiat nisi mi, sit amet lacinia lectus mattis eu. Sed pulvinar cursus elit, et tristique velit. Quisque feugiat aliquam eros, at maximus elit lobortis iaculis. 
Suspendisse odio mauris, faucibus a volutpat vitae, finibus eget ante. In arcu metus, pharetra a interdum eget, molestie in ipsum.
Cras nec sapien id nisl scelerisque congue non sed odio.

Contract Through Finxl
                `,
            pageBreak: 'after'
        },
        {
            year: '2016', organisation: 'KiwiBank', role: 'Security Architect',
            description:
                `
Suspendisse mattis lorem non dui interdum eleifend. Curabitur a nulla felis. Proin semper, tellus non posuere ornare, quam risus vestibulum quam, non dignissim velit diam vitae ligula. Cras dapibus, dolor at accumsan dignissim, eros leo blandit ante, sit amet mattis elit ligula sit amet elit. Nam porta eros vitae tellus cursus, a ornare lectus rutrum. Praesent varius elit et tellus tincidunt porta. Suspendisse blandit venenatis dolor at fringilla. Nunc sodales nulla quis mi tincidunt suscipit. Vestibulum pretium, mi venenatis ultrices sodales, quam tortor accumsan lorem, hendrerit suscipit ipsum risus eget felis. Fusce dui nisi, pellentesque non fermentum non, venenatis in odio. 
Nam quis orci tristique, convallis eros a, rutrum risus. Curabitur sed ipsum non magna suscipit dignissim eget at sapien. 
Praesent malesuada feugiat ex sit amet accumsan. Quisque ultrices lacinia leo, at venenatis est sollicitudin molestie.
- Point 1
- Point 2
                `,
                pageBreak: 'none'
        },
    ]
};