export default createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: childrenMapper(children),
    },
  }
}

const createTextElement = (text) => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

const childrenMapper = (children) => {
  return children.map((child) => {
    if (typeof child === "object") {
      return child;
    }

    return createTextElement(child);
  });
};