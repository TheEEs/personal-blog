module PostsHelper
    def markdown text
        renderer = Redcarpet::Render::HTML.new({
            escape_html: true,
            hard_wrap: false,
            no_styles:true
        })
        markdown = Redcarpet::Markdown.new(renderer,
        fenced_code_blocks: true,tables:true,lax_spacing: true)
        markdown.render(text)
    end
end
