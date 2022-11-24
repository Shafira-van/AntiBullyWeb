import React, { Component } from "react"
import Disqus from "disqus-react"


  

function Diskusi() {
    const disqusShortname = "antibully"
    const disqusConfig = {
      url: "http://localhost:3000",
      identifier: "article-id",
      title: "Anti-Bully"
    }
  return (
    <div className="kontenKomponen">
      <div className="diskusi">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </div>
  );
  }


    export default Diskusi;
