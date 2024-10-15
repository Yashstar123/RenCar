import { gql, request } from 'graphql-request'

const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/cm1xd3qqv03cs07w2ehobtl0z/master"
export const getCarsList = async () => {
  const query = gql`query CarLists {
  carLists {
    carAvg
    createdAt
    id
    price
    publishedAt
    updatedAt
    name
    carType
    image {
      url
    }
    seat
    carBrand
  }
}`

  const result = await request(MASTER_URL, query)
  return result;
}

export const getStoreLocations = async () => {
  const query = gql`query storeLocation {
  storesLocations {
    address
  }
}`

  const result = await request(MASTER_URL, query)
  return result;
}

export const createBooking = async (formValue:any) => {
  const mutationQuery = gql`
    mutation MyMutation {
  createBooking(
    data: {carId: {connect: {id: "`+formValue.carId+`"}}, 
    contactNumber: "`+formValue.contactNumber+`", 
    dropOffDate: "`+formValue.dropOffDate+`", 
    dropOffTime: "`+formValue.dropOffTime+`", 
    pickUpDate: "`+formValue.pickUpDate+`", 
    pickUpTime: "`+formValue.pickUpTime+`", 
    userName: "`+formValue.userName+`"}
  ) {
    id
  }
}
  `

  const result = await request(MASTER_URL, mutationQuery);
  return result;
}