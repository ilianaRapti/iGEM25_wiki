import pages from "../pages.ts";

export const getPathMapping = () => {
  return pages.reduce<{
    [key: string]: {
      name: string | undefined;
      title: string | undefined;
      component: React.FC;
      lead: string | undefined;
      source_header: string | undefined;
      source_bg: string | undefined;
      navbar: boolean | undefined;
    };
  }>((map, item) => {
    if ("path" in item && item.path && item.component) {
      map[item.path] = {
        name: item.name,
        title: item.title,
        component: item.component,
        lead: item.lead,
        source_header: item.source_header,
        source_bg: item.source_bg,
        navbar: item.navbar,
      };
    } else if ("folder" in item && item.folder) {
      item.folder.forEach((page) => {
        if (page.path && page.component) {
          map[page.path] = {
            name: page.name,
            title: page.title,
            component: page.component,
            lead: page.lead,
            source_header: page.source_header,
            source_bg: page.source_bg,
            navbar: page.navbar,
          };
        }
      });
    }
    return map;
  }, {});
};
