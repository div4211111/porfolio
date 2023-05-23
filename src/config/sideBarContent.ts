export interface SideBarSecondElementItems {
  name: string;
  path: string;
}

export interface IInfoData {
  [key: string]: SideBarSecondElementItems[];
}

export const PersonalInfoData: IInfoData = {
  bio: [
    {
      name: "my-bio",
      path: "/about/personal-info/bio/my-bio",
    },
  ],
  interests: [
    {
      name: "football",
      path: "/about/personal-info/interests/football",
    },
  ],
  education: [
    {
      name: "university",
      path: "/about/personal-info/education/university",
    },
  ],
};

export const ProfessionalInfoData: IInfoData = {
  experience: [
    {
      name: "trello",
      path: "/about/professional-info/experience/trello",
    },
    {
      name: "pdf-templated",
      path: "/about/professional-info/experience/pdf-templated",
    },
  ],
};

export const HobbiesInfoData: IInfoData = {
  gaming: [
    {
      name: "fifa",
      path: "/about/hobbies/gaming/fifa",
    },
    {
      name: "cs",
      path: "/about/hobbies/gaming/cs",
    },
  ],
};

export type ContactsType = "email" | "phone";
export interface IContactsData {
  name: string;
  path: string;
  type: ContactsType;
}
export const ConctactsInfoData: IContactsData[] = [
  {
    name: "alexeevandre@gmail.com",
    path: "mailto:alexeevandre@gmail.com",
    type: "email",
  },
  {
    name: "+7(921) 504 89 78",
    path: "tel:+79210548978",
    type: "phone",
  },
];
