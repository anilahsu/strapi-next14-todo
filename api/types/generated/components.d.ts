import type { Schema, Attribute } from '@strapi/strapi';

export interface CaseStudyAppealPoint extends Schema.Component {
  collectionName: 'components_appeal_appeal_points';
  info: {
    displayName: 'AppealPoint';
    description: '';
  };
  attributes: {
    AppealTitle: Attribute.String;
    AppealDesctiption: Attribute.Text;
  };
}

export interface CaseStudyInterview extends Schema.Component {
  collectionName: 'components_case_study_interviews';
  info: {
    displayName: 'interview';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    avatar: Attribute.Media;
    career: Attribute.Text;
    QAList: Attribute.Component<'case-study.q-and-a', true>;
  };
}

export interface CaseStudyQAndA extends Schema.Component {
  collectionName: 'components_case_study_q_and_as';
  info: {
    displayName: 'Q&A';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'case-study.appeal-point': CaseStudyAppealPoint;
      'case-study.interview': CaseStudyInterview;
      'case-study.q-and-a': CaseStudyQAndA;
    }
  }
}
