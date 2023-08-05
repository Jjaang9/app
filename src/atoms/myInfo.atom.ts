import { atom } from "recoil";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

export const ContactListAtomState = atom<Contact[]>({
  key: "my-info",
  default: [],
});
