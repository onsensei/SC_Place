export const getRestaurantInBangsueArea = () => ({
  method: 'GET',
  baseUrl: 'https://maps.googleapis.com',
  path: '/maps/api/place/textsearch/json',
  query: {
    key: 'AIzaSyDfz35G-rU4an4dx4MMJ11FYu4kAnZzPM8',
    query: 'Bangsue',
    type: 'restaurant',
    location: '13.820851,100.523665',
    radius: 3000
  },
  headers: {},
  body: {}
});
