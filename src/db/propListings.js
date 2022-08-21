const listings = [
    {
        "id": 1234,
        "size": "2911 Sq Ft.",
        "beds": "2",
        "baths": "1",
        "price": "$570,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_1.jpg",
        "images": [
            {
                original: '/assets/images/properties/img_1.jpg',
                thumbnail: '/assets/images/properties/img_1.jpg',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
              }
        ]
    },
    {
        "id": 2987,
        "size": "1500 Sq Ft.",
        "beds": "3",
        "baths": "2",
        "price": "$980,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_2.jpg",
        "images": [
            {
                original: '/assets/images/properties/img_2.jpg',
                thumbnail: '/assets/images/properties/img_2.jpg',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
              }
        ]
    },
    {
        "id": 3098,
        "size": "2000 Sq Ft.",
        "beds": "4",
        "baths": "3",
        "price": "$670,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_3.jpg",
        "images": [
            {
                original: '/assets/images/properties/img_3.jpg',
                thumbnail: '/assets/images/properties/img_3.jpg',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
              }
        ]
    },
    {
        "id": 4321,
        "size": "3400 Sq Ft.",
        "beds": "4",
        "baths": "5",
        "price": "$770,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_3.jpg",
        "images": [
            {
                original: '/assets/images/properties/img_3.jpg',
                thumbnail: '/assets/images/properties/img_3.jpg',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
              }
        ]
    },
    {
        "id": 5816,
        "size": "6200 Sq Ft.",
        "beds": "5",
        "baths": "3",
        "price": "$1,570,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_2.jpg",
         "images": [
            {
                original: '/assets/images/properties/img_2.jpg',
                thumbnail: '/assets/images/properties/img_2.jpg',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
              }
        ]
    },
    {
        "id": 6123,
        "size": "5000 Sq Ft.",
        "beds": "4",
        "baths": "4",
        "price": "$950,000",
        "address": "156/10 Sapling Street, Harrison, ACT 2914",
        "photo_main": "/assets/images/properties/img_1.jpg",
        "images": [
            {
                original: '/assets/images/properties/img_2.jpg',
                thumbnail: '/assets/images/properties/img_2.jpg',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6323DD8A5462D44&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6325DD8A5462D2C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC6326DD8A5462DCA&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CEDD8A5462DE1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CADD8A5462DA2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C0DD8A5462D0E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C4DD8A5462DB1&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C2DD8A5462DF2&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CBDD8A5462D8A&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63CFDD8A5462D9B&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63AFDD8A5462D71&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C7DD8A5462D3D&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63A7DD8A5462D6C&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E2DD8A5462110&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63C8DD8A5462141&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63ABDD8A546212E&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63E0DD8A54621CC&t=pi&f=I',
              },
              {
                original: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
                thumbnail: 'https://mediaserver.centris.ca/media.ashx?id=ADDC36CDCCC63EFDD8A54621E0&t=pi&f=I',
              }
        ]
    }
]

module.exports = listings;