import { defineField, defineType } from "sanity";

export const offeringCategory = defineType({
  name: 'offeringCategory',
  title: 'Offering Category',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'shortTagline',
      title: 'ShortTagline',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),
    // defineField({
    //   name: 'services',
    //   title: 'Services',
    //   type: 'array',
    //   of: [
    //     defineField({
    //       type: 'object',
    //       name: 'service',
    //       fields: [
    //         defineField({
    //           name: 'image',
    //           title: 'Image',
    //           type: 'image',
    //           options: { hotspot: true },
    //         }),
    //         defineField({
    //           name: 'name',
    //           title: 'Service Name',
    //           type: 'string',
    //         }),
    //       ],
    //     }),
    //   ],
    // }),
    defineField({
      name: 'offering',
      title: 'Offerings',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'titleBlock',
          title: 'Section Title',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
          ],
          preview: {
            select: { title: 'title' },
            prepare({ title }) {
              return { title: `Section Title: ${title}` };
            },
          },
        }),
        defineField({
          type: 'object',
          name: 'offeringItem',
          title: 'Offering Item',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: { list: ['regular', 'big'] },
            }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({
              name: 'backgroundIcon',
              title: 'Service Icon (for Regular type)',
              type: 'image',
              hidden: ({ parent }) => parent?.type === 'big',
            }),
            defineField({
              name: 'imageSrc',
              title: 'Image (for Big type)',
              type: 'image',
              hidden: ({ parent }) => parent?.type !== 'big',
            }),
            defineField({
              name: 'coverageItems',
              title: 'Coverage Items (for Big type)',
              type: 'array',
              of: [{ type: 'string' }],
              hidden: ({ parent }) => parent?.type !== 'big',
            }),
          ],
        }),
      ],
    }),
    
    defineField({
      name: 'secondaryOffering',
      title: 'Secondary Offerings',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'sectionTitle',
          title: 'Section Title',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
          ],
          preview: {
            select: { title: 'title' },
            prepare({ title }) {
              return { title: `Section Title: ${title}` };
            },
          },
        }),
        defineField({
          type: 'object',
          name: 'offeringItem',
          title: 'Offering Item',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: ['regular', 'big'],
              },
            }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
              hidden: ({ parent }) => parent?.type === 'big',
            }),
            defineField({
              name: 'imageSrc',
              title: 'Image (for Big type)',
              type: 'image',
              hidden: ({ parent }) => parent?.type !== 'big',
            }),
            defineField({
              name: 'coverageItems',
              title: 'Coverage Items (for Big type)',
              type: 'array',
              of: [{ type: 'string' }],
              hidden: ({ parent }) => parent?.type !== 'big',
            }),
          ],
        }),
      ],
    }),
    
    
    // defineField({
    //   name: 'features',
    //   title: 'Features Section',
    //   type: 'object',
    //   fields: [
    //     defineField({
    //       name: 'heading',
    //       title: 'Heading',
    //       type: 'string',
    //     }),
    //     defineField({
    //       name: 'highlightedText',
    //       title: 'Highlighted Text',
    //       type: 'string',
    //     }),
    //     defineField({
    //       name: 'headingDescription',
    //       title: 'Heading Description',
    //       type: 'text',
    //     }),
    //     defineField({
    //       name: 'imageSrc',
    //       title: 'Image',
    //       type: 'image',
    //       options: { hotspot: true },
    //     }),
    //     defineField({
    //       name: 'imageAlt',
    //       title: 'Image Alt Text',
    //       type: 'string',
    //     }),
    //     defineField({
    //       name: 'features',
    //       title: 'Features List',
    //       type: 'array',
    //       of: [
    //         defineField({
    //           type: 'object',
    //           name: 'featureItem',
    //           fields: [
    //             defineField({
    //               name: 'iconSrc',
    //               title: 'Icon URL',
    //               type: 'image',
    //               description: 'Paste the relative or absolute path to the icon.',
    //             }),
    //             defineField({
    //               name: 'text',
    //               title: 'Text',
    //               type: 'string',
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //   ],
    // }),
    
  ],
});
