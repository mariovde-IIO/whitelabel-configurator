const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

async function apiCall(query, variables) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  };
  return await fetch(fetchUrl, options);
}

async function getFilters() {
  const query = `
  {
    filterCollection {
      items {
        name
        label
        valuesCollection {
          items {
            label
            hexValue
          }
        }
      }
    }
  }`;
  const response = await apiCall(query);
  const json = await response.json();

  console.log("Json filters ", JSON.stringify(json));
  const formattedData = await json.data.filterCollection.items.map(
    async (filter) => {
      const { name, label } = filter;
      return {
        name,
        label,
        items: filter.valuesCollection.items,
      };
    }
  );
  return Promise.all(formattedData);
}

export const client = {
  getFilters,
};
