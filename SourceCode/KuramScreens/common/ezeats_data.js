
export default class Resturants {


  static data = [
    {
      id: 0,
      name: 'All',
      selected:false,

      resturants:[


          {
              id:0,
              restName: 'Arabi',
              type:'Casual',
              latlng:{
                  latitude: 33.4759034 ,
                  longitude: 73.2789362,
              }
              ,
              image:[
                  'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm' ,phoneNum:'03135705782'
          },
          {
              id:1,
              restName: 'Khayal',
              type:'Casual',
              latlng:{
                  latitude: 33.4759034 ,
                  longitude: 73.2789362,
              }
              ,
              image:['https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm' ,phoneNum:'03135705782'
          },
          {
              id:2,
              restName: 'Sea',
              type:'Expensive',
              latlng:{
                  latitude: 33.4759034 ,
                  longitude: 73.2789362,
              }
              ,
              image:[
                  'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm' ,phoneNum:'03135705782'
          },
          {
              id:3,
              restName: 'GINSOY',
              type:'Budget',
              latlng:{
                  latitude: 31.5010 ,
                  longitude: 74.3216,
              },

              image:[
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg',
                  'https://blog.e360.pk/wp-content/uploads/2020/01/buffet-restaurant-in-islamabad-scaled.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
              ]
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
          },
          {
              id:4,
              restName: 'MANAR',
              type:'Expensive',
              latlng:{
                  latitude: 31.5010 ,
                  longitude: 74.3216,
              },

              image:['https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg',
                  'https://blog.e360.pk/wp-content/uploads/2020/01/buffet-restaurant-in-islamabad-scaled.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
              ]
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
          },
          {
              id:5,
              restName: 'POMELO',
              type:'Casual',
              latlng:{
                  latitude: 31.5010 ,
                  longitude: 74.3216,
              },

              image:['https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg',
                  'https://blog.e360.pk/wp-content/uploads/2020/01/buffet-restaurant-in-islamabad-scaled.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
              ]
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
          },
          {
              id:6,
              restName: 'SICHUA',
              type:'Casual',

              latlng:
                  {
                      latitude: 31.468722,
                      longitude: 74.317268 ,
                  },
              image:['https://blizin.com/public/images/uploads/hotel/views/lahorehotel-1578564219.jpg',
                  'https://cf.bstatic.com/images/hotel/max1024x768/247/247297278.jpg',
                  'https://blog.e360.pk/wp-content/uploads/2020/01/buffet-restaurant-in-islamabad-scaled.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',
              phoneNum:'03135705782'

          },
          {
              id:7,
              restName: 'TAI',
              type:'Budget',

              latlng:
                  {
                      latitude: 31.468722,
                      longitude: 74.317268 ,
                  },
              image:['https://blizin.com/public/images/uploads/hotel/views/lahorehotel-1578564219.jpg',
                  'https://cf.bstatic.com/images/hotel/max1024x768/247/247297278.jpg',
                  'https://blog.e360.pk/wp-content/uploads/2020/01/buffet-restaurant-in-islamabad-scaled.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',
              phoneNum:'03135705782'

          },
          {
              id:8,
              restName: 'XIWANG',
              type:'Casual',
              latlng:{
                  latitude: 31.5010 ,
                  longitude: 74.3216,
              },
              image:['https://ak-d.tripcdn.com/images/200t190000017eala5A8D_Z_550_412_R5_Q70_D.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/0f/5c/5f/c4/photo1jpg.jpg',
                  'https://cf.bstatic.com/images/hotel/max1024x768/247/247297278.jpg'
              ]
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
          },
          {
              id:9,
              restName: 'DUMPU',
              type:'Expensive',
              latlng:{
                  latitude: 31.5010 ,
                  longitude: 74.3216,
              },
              image:['https://ak-d.tripcdn.com/images/200t190000017eala5A8D_Z_550_412_R5_Q70_D.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/0f/5c/5f/c4/photo1jpg.jpg',
                  'https://cf.bstatic.com/images/hotel/max1024x768/247/247297278.jpg'
              ]
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
          },
          {
              id:10,
              restName: 'GUSTO',
              type:'Budget',
              latlng:{
                  latitude: 31.468722,
                  longitude: 74.317268 ,
              },
              image:[
                  'https://media-cdn.tripadvisor.com/media/photo-s/1a/64/13/37/the-capital-grill.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/0f/5c/5f/c4/photo1jpg.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'

          },
          {
              id:11,
              restName: 'MEHAK',
              type:'Budget',
              latlng:{
                  latitude: 31.468722,
                  longitude: 74.317268 ,
              },
              image:[
                  'https://media-cdn.tripadvisor.com/media/photo-s/1a/64/13/37/the-capital-grill.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/0f/5c/5f/c4/photo1jpg.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'

          },

          {
              id:12,
              restName: 'LOUNGE',
              type:'Expensive',
              latlng:{
                  latitude: 31.5010 ,
                  longitude: 74.3216,
              },
              image:[
                  'https://media-cdn.tripadvisor.com/media/photo-s/12/0e/ec/2f/outdoor-sitting-area.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/1a/64/13/37/the-capital-grill.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
          },
          {
              id:13,
              restName: 'Haveli',
              type:'Budget',
              latlng: {
                  latitude: 31.5010 ,
                  longitude: 74.3216,
              },
              image:[
                  'https://media-cdn.tripadvisor.com/media/photo-s/12/0e/ec/2f/outdoor-sitting-area.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/1a/64/13/37/the-capital-grill.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
          },
          {
              id:14,
              restName: 'CUBE',
              type:'Budget',
              latlng:{
                  latitude: 31.468722,
                  longitude: 74.317268 ,
              },
              image:[
                  'https://i.pinimg.com/originals/8a/09/6d/8a096d3b2973674ae93ed66bd98a341f.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/12/0e/ec/2f/outdoor-sitting-area.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
          },
          {
              id:15,
              restName: 'COVO',
              type:'Casual',
              latlng:{
                  latitude: 31.468722,
                  longitude: 74.317268 ,
              },
              image:[
                  'https://i.pinimg.com/originals/8a/09/6d/8a096d3b2973674ae93ed66bd98a341f.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/12/0e/ec/2f/outdoor-sitting-area.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
          },
      ]

    },



    {
      id: 1,
      name: 'America',
      selected:false,

      resturants:[
        {
            id:0,
            restName: 'Arabi',
            type:'Casual',
            latlng:{
              latitude: 33.4759034 ,
              longitude: 73.2789362,
            }
              ,
              image:[
                      'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
                      'https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm' ,phoneNum:'03135705782'
        },
        {
          id:1,
          restName: 'Khayal',
          type:'Casual',
          latlng:{
            latitude: 33.4759034 ,
            longitude: 73.2789362,
            }
            ,
            image:['https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg',
                    'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
                    'https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg']
            ,Address: 'Shahrah-e-Quaid-e-Azam'
            ,Time:'2:39:00 pm' ,phoneNum:'03135705782'
      },
      {
        id:2,
        restName: 'Sea',
        type:'Expensive',
        latlng:{
          latitude: 33.4759034 ,
          longitude: 73.2789362,
          }
          ,
          image:[
                  'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
                  'https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg']
          ,Address: 'Shahrah-e-Quaid-e-Azam'
          ,Time:'2:39:00 pm' ,phoneNum:'03135705782'
    },
      ]

    },


    {
      id: 2,
      name: 'French',
      selected:false,
      resturants:[
        {
            id:0,
            restName: 'GINSOY',
            type:'Budget',
            latlng:{
              latitude: 31.5010 ,
                longitude: 74.3216,
              },

              image:[
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg',
              'https://blog.e360.pk/wp-content/uploads/2020/01/buffet-restaurant-in-islamabad-scaled.jpg',
              'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
            ]
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
        },
        {
          id:1,
          restName: 'MANAR',
          type:'Expensive',
          latlng:{
            latitude: 31.5010 ,
              longitude: 74.3216,
            },

            image:['https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg',
            'https://blog.e360.pk/wp-content/uploads/2020/01/buffet-restaurant-in-islamabad-scaled.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
          ]
            ,Address: 'Shahrah-e-Quaid-e-Azam'
            ,Time:'2:39:00 pm',phoneNum:'03135705782'
      },
      {
        id:2,
        restName: 'POMELO',
        type:'Casual',
        latlng:{
          latitude: 31.5010 ,
            longitude: 74.3216,
          },

          image:['https://media-cdn.tripadvisor.com/media/photo-s/0b/64/88/86/the-food.jpg',
          'https://blog.e360.pk/wp-content/uploads/2020/01/buffet-restaurant-in-islamabad-scaled.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/10/c0/90/4f/photo0jpg.jpg',
        ]
          ,Address: 'Shahrah-e-Quaid-e-Azam'
          ,Time:'2:39:00 pm',phoneNum:'03135705782'
    },
      ]
    },


    {
      id: 3,
      name: 'Seafood',
      selected:false,
      resturants:[
        {
            id:0,
            restName: 'SICHUA',
            type:'Casual',

            latlng:
                {
                  latitude: 31.468722,
                  longitude: 74.317268 ,
              },
            image:['https://blizin.com/public/images/uploads/hotel/views/lahorehotel-1578564219.jpg',
                  'https://cf.bstatic.com/images/hotel/max1024x768/247/247297278.jpg',
                'https://blog.e360.pk/wp-content/uploads/2020/01/buffet-restaurant-in-islamabad-scaled.jpg']
            ,Address: 'Shahrah-e-Quaid-e-Azam'
            ,Time:'2:39:00 pm',
            phoneNum:'03135705782'

        },
        {
          id:1,
          restName: 'TAI',
          type:'Budget',

          latlng:
              {
                latitude: 31.468722,
                longitude: 74.317268 ,
            },
          image:['https://blizin.com/public/images/uploads/hotel/views/lahorehotel-1578564219.jpg',
                'https://cf.bstatic.com/images/hotel/max1024x768/247/247297278.jpg',
              'https://blog.e360.pk/wp-content/uploads/2020/01/buffet-restaurant-in-islamabad-scaled.jpg']
          ,Address: 'Shahrah-e-Quaid-e-Azam'
          ,Time:'2:39:00 pm',
          phoneNum:'03135705782'

      },
      ]
    },


    {
      id: 4,
      name: 'Thai',
      selected:false,
      resturants:[
        {
            id:0,
            restName: 'XIWANG',
            type:'Casual',
            latlng:{
              latitude: 31.5010 ,
                longitude: 74.3216,
              },
            image:['https://ak-d.tripcdn.com/images/200t190000017eala5A8D_Z_550_412_R5_Q70_D.jpg',
                'https://media-cdn.tripadvisor.com/media/photo-s/0f/5c/5f/c4/photo1jpg.jpg',
              'https://cf.bstatic.com/images/hotel/max1024x768/247/247297278.jpg'
              ]
            ,Address: 'Shahrah-e-Quaid-e-Azam'
            ,Time:'2:39:00 pm',phoneNum:'03135705782'
        },
        {
          id:1,
          restName: 'DUMPU',
          type:'Expensive',
          latlng:{
            latitude: 31.5010 ,
              longitude: 74.3216,
            },
          image:['https://ak-d.tripcdn.com/images/200t190000017eala5A8D_Z_550_412_R5_Q70_D.jpg',
              'https://media-cdn.tripadvisor.com/media/photo-s/0f/5c/5f/c4/photo1jpg.jpg',
            'https://cf.bstatic.com/images/hotel/max1024x768/247/247297278.jpg'
            ]
          ,Address: 'Shahrah-e-Quaid-e-Azam'
          ,Time:'2:39:00 pm',phoneNum:'03135705782'
      },
      ]
    },


    {
      id: 5,
      name: 'Deli',
      selected:false,
      resturants:[
        {
            id:0,
            restName: 'GUSTO',
            type:'Budget',
            latlng:{
              latitude: 31.468722,
              longitude: 74.317268 ,
              },
              image:[
              'https://media-cdn.tripadvisor.com/media/photo-s/1a/64/13/37/the-capital-grill.jpg',
           'https://media-cdn.tripadvisor.com/media/photo-s/0f/5c/5f/c4/photo1jpg.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'

        },
        {
          id:1,
          restName: 'MEHAK',
          type:'Budget',
          latlng:{
            latitude: 31.468722,
            longitude: 74.317268 ,
            },
            image:[
            'https://media-cdn.tripadvisor.com/media/photo-s/1a/64/13/37/the-capital-grill.jpg',
         'https://media-cdn.tripadvisor.com/media/photo-s/0f/5c/5f/c4/photo1jpg.jpg']
            ,Address: 'Shahrah-e-Quaid-e-Azam'
            ,Time:'2:39:00 pm',phoneNum:'03135705782'

      },
      ]
    },


    {
      id: 6,
      name: 'Coffee',
      selected:false,
      resturants:[
        {
            id:0,
            restName: 'LOUNGE',
            type:'Expensive',
            latlng:{
              latitude: 31.5010 ,
                longitude: 74.3216,
              },
              image:[
                      'https://media-cdn.tripadvisor.com/media/photo-s/12/0e/ec/2f/outdoor-sitting-area.jpg',
                     'https://media-cdn.tripadvisor.com/media/photo-s/1a/64/13/37/the-capital-grill.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
        },
        {
          id:1,
          restName: 'Haveli',
          type:'Budget',
          latlng: {
            latitude: 31.5010 ,
              longitude: 74.3216,
            },
            image:[
                    'https://media-cdn.tripadvisor.com/media/photo-s/12/0e/ec/2f/outdoor-sitting-area.jpg',
                   'https://media-cdn.tripadvisor.com/media/photo-s/1a/64/13/37/the-capital-grill.jpg']
            ,Address: 'Shahrah-e-Quaid-e-Azam'
            ,Time:'2:39:00 pm',phoneNum:'03135705782'
      },
      ]
    },


    {
      id: 7,
      name: 'Mexican',
      selected:false,
      resturants:[
        {
            id:0,
            restName: 'CUBE',
            type:'Budget',
            latlng:{
              latitude: 31.468722,
              longitude: 74.317268 ,
              },
              image:[
            'https://i.pinimg.com/originals/8a/09/6d/8a096d3b2973674ae93ed66bd98a341f.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/12/0e/ec/2f/outdoor-sitting-area.jpg']
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
        },
        {
          id:1,
          restName: 'COVO',
          type:'Casual',
          latlng:{
            latitude: 31.468722,
            longitude: 74.317268 ,
            },
            image:[
          'https://i.pinimg.com/originals/8a/09/6d/8a096d3b2973674ae93ed66bd98a341f.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/12/0e/ec/2f/outdoor-sitting-area.jpg']
            ,Address: 'Shahrah-e-Quaid-e-Azam'
            ,Time:'2:39:00 pm',phoneNum:'03135705782'
      },
      ]
    },






    {
      id: 8,
      name: 'Chinese',
      selected:false,
      resturants:[
        {
            id:0,
            restName: 'TOKYO',
            type:'Expensive',
            latlng:{
              latitude: 31.5010 ,
                longitude: 74.3216,
              },
              image:['https://i.pinimg.com/originals/8a/09/6d/8a096d3b2973674ae93ed66bd98a341f.jpg',
              'https://i.pinimg.com/originals/8a/09/6d/8a096d3b2973674ae93ed66bd98a341f.jpg',
              'https://media-cdn.tripadvisor.com/media/photo-s/12/0e/ec/2f/outdoor-sitting-area.jpg'
            ]
              ,Address: 'Shahrah-e-Quaid-e-Azam'
              ,Time:'2:39:00 pm',phoneNum:'03135705782'
        },
        {
          id:1,
          restName: 'OPTION',
          type:'Expensive',
          latlng:{
            latitude: 31.5010 ,
              longitude: 74.3216,
            },
            image:[
            'https://i.pinimg.com/originals/8a/09/6d/8a096d3b2973674ae93ed66bd98a341f.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-s/12/0e/ec/2f/outdoor-sitting-area.jpg'
          ]
            ,Address: 'Shahrah-e-Quaid-e-Azam'
            ,Time:'2:39:00 pm',phoneNum:'03135705782'
      },
      ]
    },

]



}
