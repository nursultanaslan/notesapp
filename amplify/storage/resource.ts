import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyNotesDrive",
  access: (allow) => ({  /**erişimi yalnızca görüntüyü yükleyen kişinin görüntüleyebileceği şekilde ayarlar. */
    "media/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});
