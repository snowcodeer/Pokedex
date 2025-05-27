/** @type {import('next').NextConfig} */
const nextConfig = {
   async rewrites() {
       return [
           {
               source: '/api/pokemon',
               destination: 'https://uw2uw7ty4b.execute-api.eu-west-2.amazonaws.com/Prod/pokemon',
           },
           {
               source: '/api/pokemon/:id',
               destination: 'https://uw2uw7ty4b.execute-api.eu-west-2.amazonaws.com/Prod/pokemon/:id',
           },
       ];
   }
};


export default nextConfig;