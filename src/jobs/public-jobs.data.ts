export const PUBLIC_JOBS_MOCK = {
  languages: [
    { name: 'Java', frameworks: [{ name: 'Spring' }] },
    {
      name: 'Python',
      frameworks: [{ name: 'Django' }, { name: 'Flask' }],
    },
    {
      name: 'TypeScript',
      frameworks: [
        {
          name: 'React',
          levels: [{ name: 'junior' }, { name: 'mid' }, { name: 'senior' }],
        },
        {
          name: 'Angular',
          levels: [
            {
              name: 'junior',
              projects: [
                { name: 'pharmacy project' },
                { name: 'banking system' },
                { name: 'mobile games app' },
              ],
            },
            { name: 'mid' },
            { name: 'senior' },
          ],
        },
      ],
    },
  ],
};
