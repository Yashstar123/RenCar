import { gql, request } from 'graphql-request'

const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/cm1xd3qqv03cs07w2ehobtl0z/master"
const AUTH_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MjkwMTM5NDgsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtMXhkM3FxdjAzY3MwN3cyZWhvYnRsMHovbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiI2ZjRlNmU5NS1kYzgwLTQzZmEtOWViNC0zZTMzMTA1ODI3MDYiLCJqdGkiOiJjbTJhcTlneTQwNnllMDdwamUwNHI4endrIn0.PYybhiVj1wolg-zx2RQi-zIBzereXhrTVjuZfodXCGt4vDSF35OCF0SyMyXbKmhEGei5AOR3lGAxSgx8uX1zFuFqQOK0jKbwUh48ER84B0sFGbKCrnz6DBnt4KKBVayKNf50u5BuJlpJ-Rp_NV-f4GnhjvzeNzQb5cWj2Aobju-RdmTEJ7xTfSouQJsie8TpTWPWc2wA0l7FVxUPU1-nzfYvm3S1ZX7tJ_RapU8QNNX8_eQoETekIDEOgNX7t_xGTn-pp6lPX7VzoUOC9V0lwtm1JjvyfzA5xwIIDCPtKaMXnioQx3NKXu3-XxEFYmZxMxPJNQZyOFXBom7B7n-7K86YT7U415t0hEW5xTqa-n6H14Igqqit3DGSgLmI_O-BTul6sQOYFmWBkTiw8Xs0VEpvmvvBkObQhDODAc1IDdjMwx3o8Hcn1wgUeZOoabMBQXQgXHCMtSpz_NAOxSxl_vvIcQyVW0IjBP2fPrnlLTlbm4QN1M3hiv91zJeqVR6td9ceW6CDu4fV8fsBpPIi-d9BbxR6M_cxd1_YXYcS8jANZtF_wI5zBsijVDbnAMc4fmqrZNh5ibrI956ot0ng-8dSn22hM-CDJcY_FOrgOQ1Cn91XN2kiRJILIG7n58Bf4vZrHTIvDdCM4WLF5JN5A9MMji81DEWlT8n8CGhfVcA"
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

  const headers = {
    Authorization: `Bearer ${AUTH_TOKEN}`, // Set the Authorization header
  };

  try {
    const result = await request(MASTER_URL, mutationQuery, headers);
    return result;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw new Error("Failed to create booking: ");
  }
}