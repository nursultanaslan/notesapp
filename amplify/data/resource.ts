import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
/**Aşağıdaki güncellenmiş kod , not kaydının erişimini kaydın sahibiyle sınırlamak için,  
 * sahip başına yetkilendirme kuralı  allow.owner()'ı kullanır. */
const schema = a.schema({
  Note: a
    .model({
      name: a.string(),  /**kayıt oluşturulurken her nota not sahibinin kimlik bilgileri alanı eklenir. */
      description: a.string(),
      image: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

