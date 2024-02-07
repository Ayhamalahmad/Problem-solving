function domainName(url) {
    const linkRegexStart = /^(https?:\/\/)?(www.)?/gi;
    const linkRegexEnd = /\.\S+/gi;
    const linkStart = url.match(linkRegexStart);
    const linkWithoutStart = url.replace(linkStart, "");
    const linkEnd = linkWithoutStart.match(linkRegexEnd);
    const domain = linkWithoutStart.replace(linkEnd, "");
    // console.log(domain);
    return domain;
  }
  parses("http://www.zombie-bites.com");
  parses("http://github.com/carbonfive/raygun");
  parses("https://www.cnet.com");
  parses("www.xakep.ru");